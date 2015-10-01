using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;


using WebApiContrib.Formatting.Siren;

using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.IO;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WebApiContrib.MediaType.Hypermedia;

namespace WebApiContrib.Formatting.Siren.AcceptanceTests
{
    [TestClass]
    public class Siren_DeSerializer_tests
    {
        private SirenMediaTypeFormatter formatter = new SirenMediaTypeFormatter();
        private const string SirenMediaType = "application/vnd.siren+json";
        private MediaTypeHeaderValue SirenMediaTypeHeader = new MediaTypeHeaderValue(SirenMediaType);

        [TestMethod]
        public void ReadFromStreamAsync_DeSerializes_Class_Correctly()
        {
            // Arrange
            string inputString = @"
{
  ""class"": [
    ""Car""
  ]
}";

            using (MemoryStream stream = new MemoryStream(System.Text.Encoding.Default.GetBytes(inputString)))
            {
                var content = new StreamContent(stream);

                var task = formatter.ReadFromStreamAsync(typeof(Car), stream, content, null);
                Car car = task.Result as Car;
                Assert.AreEqual("Car", car.Class[0]);
            }
        }

        [TestMethod]
        public void ReadFromStreamAsync_Deserializes_Properties_Correctly()
        {
            // Arrange
            Car car = new Car();
            string inputString =
                "{\"class\":[],\"properties\":{\"colour\":\"Black\",\"numberOfWheels\":5},\"entities\":[]}";

            // Act
            using (MemoryStream stream = new MemoryStream(System.Text.Encoding.Default.GetBytes(inputString)))
            {
                var content = new StreamContent(stream);

                var task = formatter.ReadFromStreamAsync(typeof(Car), stream, content, null);
                car = task.Result as Car;
            }

            // Assert
            Assert.AreEqual("Black", car.Colour);
            Assert.AreEqual(5, car.NumberOfWheels);
 
        }



        [TestMethod]
        public void WriteToStreamAsync_Serializes_Class_Correctly()
        {
            // Arrange
            Car myCar = new Car();
            myCar.Class.Add("Car Class");

            // Act
            IEntity entityAfter = GetIEntityResultsFromWriteToStreamAsync(myCar);

            // Assert - Have properties
            Assert.IsTrue(entityAfter.Class.Contains("Car Class"));


        }



        
        [TestMethod]
        public void WriteToStreamAsync_Serializes_SubEntities_Of_SubEntitiess_Correctly()
        {
            // Arrange
            Car myCar = new Car();
            Wheel myWheel = new Wheel();

            WheelNut myNut = new WheelNut();
            myNut.IsLockNut = true;
            myNut.AddClass("WheelNut");
            myNut.AddRel("/rels/wheelnut");

            // Add the subentity to the subentity
            myWheel.AddSubEntity(myNut);

            myWheel.id = 1;
            myWheel.Size = "124x55x18";

            myWheel.Title = "My Car Wheel";
            myWheel.AddRel("/rels/car/wheel");

            myWheel.AddClass("Wheel")
                .AddAction(new WebApiContrib.MediaType.Hypermedia.Action("Inflate", "Inflate the wheel", HTTP_Method.PUT, new Uri("https://api.test.com/wheel/inflate")))
                .AddLink(new SelfLink(new Uri("https://api.test.com/wheel/1")));



            myCar.Entities.Add(myWheel);

            // Act
            IEntity entityAfter = GetIEntityResultsFromWriteToStreamAsync(myCar);

            // Assert - Have properties
            string entityString = entityAfter.Entities[0].ToString();

            string expectedString = @"{
  ""class"": [
    ""Wheel""
  ],
  ""title"": ""My Car Wheel"",
  ""rel"": [
    ""/rels/car/wheel""
  ],
  ""properties"": {
    ""id"": 1,
    ""size"": ""124x55x18""
  },
  ""entities"": [
    {
      ""class"": [
        ""WheelNut""
      ],
      ""rel"": [
        ""/rels/wheelnut""
      ],
      ""properties"": {
        ""id"": 0,
        ""isLockNut"": true
      },
      ""entities"": []
    }
  ],
  ""actions"": [
    {
      ""name"": ""Inflate"",
      ""class"": [
        ""Inflate""
      ],
      ""method"": ""PUT"",
      ""href"": ""https://api.test.com/wheel/inflate"",
      ""title"": ""Inflate the wheel"",
      ""type"": ""application/json"",
      ""fields"": []
    }
  ],
  ""links"": [
    {
      ""rel"": [
        ""self""
      ],
      ""href"": ""https://api.test.com/wheel/1"",
      ""title"": null,
      ""type"": null
    }
  ]
}";
            // Assert - Match
            Assert.AreEqual(expectedString, entityString);


        }

        
                
        [TestMethod]
        public void WriteToStreamAsync_Serializes_Actions_Correctly()
        {
            // Arrange
            Car myCar = new Car();
            Uri actionUri = new Uri("https://api.test.com/car/start");
            myCar.Actions.Add(new WebApiContrib.MediaType.Hypermedia.Action("Start", "Start the car", HTTP_Method.POST, actionUri));

            // Act
            string entityAfter = GetStringResultsFromWriteToStreamAsync(myCar);

            // Assert - Have properties
            string expectedEntity = @"{""class"":[],""properties"":{""numberOfWheels"":0},""entities"":[],""actions"":[{""name"":""Start"",""class"":[""Start""],""method"":""POST"",""href"":""https://api.test.com/car/start"",""title"":""Start the car"",""type"":""application/json"",""fields"":[]}]}";

            // Assert - Match
            Assert.AreEqual(expectedEntity, entityAfter);
        }

        

        public IEntity GetIEntityResultsFromWriteToStreamAsync(IEntity myCar)
        {
            MemoryStream memStream = new MemoryStream();

            Task writeTask = formatter.WriteToStreamAsync(typeof(Car), myCar, memStream, null, null);
            writeTask.Wait();

            memStream.Seek(0, SeekOrigin.Begin);
            string resultString = new StreamReader(memStream).ReadToEnd();

            IEntity entityAfter = JsonConvert.DeserializeObject<Car>(resultString);

            return entityAfter;

        }

        public string GetStringResultsFromWriteToStreamAsync(IEntity myCar)
        {
            MemoryStream memStream = new MemoryStream();

            Task writeTask = formatter.WriteToStreamAsync(typeof(Car), myCar, memStream, null, null);
            writeTask.Wait();

            memStream.Seek(0, SeekOrigin.Begin);
            string resultString = new StreamReader(memStream).ReadToEnd();

            return resultString;
        }

    } // class

} // namespace

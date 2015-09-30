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
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class MockData
    {
        protected readonly AngualrJSWebAPIAppDbContext _dbContext;

        public MockData(AngualrJSWebAPIAppDbContext dbContext)
        {
        }

        public static string ToMd5(string input)
        {
            // step 1, calculate MD5 hash from input
            var md5 = MD5.Create();
            var inputBytes = Encoding.ASCII.GetBytes(input);
            var hash = md5.ComputeHash(inputBytes);

            // step 2, convert byte array to hex string
            var sb = new StringBuilder();
            foreach (var t in hash)
            {
                sb.Append(t.ToString("X2"));
            }
            return sb.ToString();
        }

        public List<Organization> GetOrganizations()
        {
            return new List<Organization>
            {
                new Organization { Id = 1, Name = "Sarabi LLC", Address = "39 Henry Street", City = "Edison", CreatedOn = DateTime.Now, Active = true },
                new Organization { Id = 9, Name = "Egg Curry LLC", Address = "188 Parsonage Road", City = "Edison", CreatedOn = DateTime.Now, Active = true }
            };
        }

        public List<User> GetUsers(Organization organization)
        {
            return new List<User>
            {
                new User() { Id = 1, Pin = "Jane", Organization = organization, EmailId = "Jane.Austen@gmail.com", Name = "Jane Austen", Address = "", City = "", CreatedOn = DateTime.Now, Active = true },
                new User() { Id = 2, Pin = "Miguel", Organization = organization, Name = "Miguel de Cervantes" },
                new User() { Id = 3, Pin = "Charles", Organization = organization, Name = "Charles Dickens" },
                new User() { Id = 4, Pin = "Shoya", Organization = organization, Name = "Shoya Bali" }
            };
        }
    }
}
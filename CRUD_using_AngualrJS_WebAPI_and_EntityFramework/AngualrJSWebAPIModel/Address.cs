﻿namespace AngualrJSWebAPIApp.Models
{
    public class Address : BaseEntity<Address>
    {
        public string City { get; set; }

        public string Name { get; set; }

        public string Street { get; set; }

        public string Suite { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }
    }
}
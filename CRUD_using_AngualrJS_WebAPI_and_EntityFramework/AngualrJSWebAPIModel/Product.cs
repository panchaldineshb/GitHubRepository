﻿namespace AngualrJSWebAPIApp.Models
{
    public class Product : BaseEntity<Product>
    {
        public int OrganizationId { get; set; }

        public virtual Organization Organization { get; set; }

        public string Name { get; set; }
    }
}
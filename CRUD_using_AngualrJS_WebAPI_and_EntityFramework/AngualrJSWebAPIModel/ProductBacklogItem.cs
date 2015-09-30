﻿namespace AngualrJSWebAPIApp.Models
{
    public class ProductBacklogItem : BaseEntity<ProductBacklogItem>
    {
        public virtual ProductBacklog ProductBacklog { get; set; }

        public virtual Organization Organization { get; set; }

        public string Name { get; set; }
    }
}
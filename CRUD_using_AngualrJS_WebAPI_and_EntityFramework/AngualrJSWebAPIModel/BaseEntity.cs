using System;

namespace AngualrJSWebAPIApp.Models
{
    public class BaseEntity<T>
        where T : BaseEntity<T>
    {
        public string Id { get; set; }

        public string Description { get; set; }

        public DateTime? CreatedOn { get; set; }

        public DateTime? UpdatedOn { get; set; }

        public bool Active { get; set; }

        public bool Purged { get; set; }

        public bool Display { get; set; }
    }
}
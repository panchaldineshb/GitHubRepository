using System;

using System.ComponentModel.DataAnnotations;

namespace AngualrJSWebAPIApp.Models
{
    public class BaseEntity<T>
        where T : BaseEntity<T>
    {
        [Key]
        public int Id { get; set; }

        public string Description { get; set; }

        public DateTime? CreatedOn { get; set; }

        public DateTime? UpdatedOn { get; set; }

        public bool Active { get; set; }

        public bool Purged { get; set; }

        public bool Display { get; set; }
    }
}
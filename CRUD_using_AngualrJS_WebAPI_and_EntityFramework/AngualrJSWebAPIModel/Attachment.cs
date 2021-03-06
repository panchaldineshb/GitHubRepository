﻿namespace AngualrJSWebAPIApp.Models
{
    public class Attachment : BaseEntity<User>
    {
        public virtual Organization Organization { get; set; }

        public string Filename { get; set; }

        public string FullFilename { get; set; }

        public int Checksum { get; set; }
    }
}
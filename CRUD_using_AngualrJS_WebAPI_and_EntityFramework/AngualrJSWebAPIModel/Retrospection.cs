using System.Collections.Generic;

namespace AngualrJSWebAPIApp.Models
{
    public class Retrospection : BaseEntity<SprintBacklog>
    {
        public int SprintId { get; set; }

        public virtual Sprint Sprint { get; set; }

        public ICollection<string> ThingsWentWell { get; set; }

        public ICollection<string> ThingsNeedImprovement { get; set; }
    }
}
using System;
using System.Collections.Generic;

namespace AngualrJSWebAPIApp.Models
{
    public class Sprint : BaseEntity<Sprint>
    {
        public virtual ICollection<DefinitionOfDone> DefinitionOfDones { get; set; }

        public DateTime? Ends { get; set; }

        public string Name { get; set; }

        public virtual Organization Organization { get; set; }

        public virtual Product Product { get; set; }

        public virtual User ProductOwner { get; set; }

        public virtual User ScrumMaster { get; set; }

        public ICollection<SprintGoal> SprintGoals { get; set; }

        public virtual ICollection<User> SprintTeam { get; set; }

        public DateTime? Starts { get; set; }
    }
}
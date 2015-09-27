using System;
using System.Collections.Generic;

namespace AngualrJSWebAPIApp.Models
{
    public class Sprint : BaseEntity<Sprint>
    {
        public string Name { get; set; }

        public DateTime? Starts { get; set; }

        public DateTime? Ends { get; set; }

        public virtual User ProductOwner { get; set; }

        public virtual User ScrumMaster { get; set; }

        public virtual ICollection<User> SprintTeam { get; set; }

        public virtual ICollection<DefinitionOfDone> DefinitionOfDones { get; set; }

        public ICollection<SprintGoal> SprintGoals { get; set; }
    }
}
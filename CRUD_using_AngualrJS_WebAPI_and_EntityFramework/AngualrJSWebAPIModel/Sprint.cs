using System;

namespace AngualrJSWebAPIApp.Models
{
    public class Sprint : BaseEntity<Sprint>
    {
        public string Name { get; set; }

        public DateTime? Starts { get; set; }

        public User ProductOwner { get; set; }

        public User ScrumMaster { get; set; }

        public User[] SprintTeam { get; set; }

        public DefinitionOfDone[] DefinitionOfDones { get; set; }

        public SprintGoal[] SprintGoals { get; set; }

        public DateTime? Ends { get; set; }
    }
}
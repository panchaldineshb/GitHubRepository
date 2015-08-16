using System.ComponentModel.DataAnnotations;

namespace AngualrJSWebAPIApp.ViewModels
{
    public class ForgotViewModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}
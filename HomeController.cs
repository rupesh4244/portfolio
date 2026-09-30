using Microsoft.AspNetCore.Mvc;

namespace RupeshDotNetPortfolio.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            // if there are any activites in the DB
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Ida a UFC 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Activity 2 months ago",
                    Category = "Estudos",
                    City = "Crate�s",
                    Venue = "BR 226, KM 3 � Bairro Ven�ncios � Crate�s � Cear�. ",
                }    
                
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}
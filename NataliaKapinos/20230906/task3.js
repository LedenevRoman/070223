// вывести самое короткое видео
// название, продолжительность
db.videos.aggregate([
    {$sort: {durations_secs: 1 }},
    {$limit: 1},
    {$project: 
        {
            _id: 0,
            title: 1,
            durations_secs: 1
        }    
    }            
])
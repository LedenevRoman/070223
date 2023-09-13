//вывести среднюю продолжит и кол-во роликов
db.videos.aggregate([
    {$group: 
        {
            _id: null,
            avg_duration: {$avg: "$durations_secs" },
            total_videos: {$count: {}}
        }
    }        
])
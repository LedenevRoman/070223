db.videos.aggregate([
{
    $group: {
        _id: null,
        avg_duration: {$avg: '$duration_secs'},
        total_videos: {$count: {}}
    }
},
{$project: {
    _id: 0
}}
])
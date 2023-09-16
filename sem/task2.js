db.users.findOne({_id: 1}, {_id: 0, fullname: 1})

db.videos.aggregate([
    {$sample: { size: 1 }}
])

db.videos.aggregate([
    {
        $group: {
            _id: null,
            avg_durations: {$avg: '$durations_secs'}
            total_videos: {$count: {}}
        }
     }
])

db.videos.aggregate([
    {
        $sort: {duration_secs: 1}},{$limit: 1},
                {$project: {_id: 0, title: 1, duration_secs: 1}}])

db.videos.aggregate([
    {$sort: {duration_secs: 1}},
    {$limit: 1},
    {$project: {
        _id: 0,
        title: 1,
            duration_secs: 1
        }}
])
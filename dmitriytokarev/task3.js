db.videos.aggregate([
    {"$sort": {"duration_sec": 1}},
    {"$limit": 1},
    {$project:{title:1, duration_sec:1, _id:0 }}
])
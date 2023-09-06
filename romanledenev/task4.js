db.videos.aggregate([
{ $sort: { duration_secs: -1 } },
{ $limit: 1 },
{ $project: { title: 1, _id: 0, duration_secs: 1 } }
])git
// Вывести произвольную реакцию
db.videos.aggregate([
    {$sample: {
      size: 1
    }}
])

// Вывести статистику по видео
db.videos.aggregate([
    {
        $group: {
          _id: null,
          avg_duration: {
            $avg: "$duration_secs"
          },
          count_videos: {
            $count: {}
          }
        }
    }
])

// Вывести самое короткое видео
db.videos.aggregate([
    {
        $sort: {
          duration_secs: 1
        }
    },
    {
        $limit: 1
    },
    {
        $project: {
          title: 1,
          duration_secs: 1
        }
    }
])

// Увеличить баланс всех незаблокированных юзеров на 15%
db.workers.updateMany([
    {
        is_blocked: {$ne: true}
    },
    {
        $mul: {balance: 1.15}
    }
])

// Увеличить баланс всех юзеров из Germany и USA на 100
db.users.updateMany([
    {
        country: {
            $in: ['Germany', 'USA']
        }
    },
    {
        $inc: {
            balance: 100
        }
    }
])
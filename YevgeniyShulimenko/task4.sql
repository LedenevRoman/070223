db.users.updateMany(
    {
        country: { $in: ['Germany', 'USA'] }
    },
    {
        $inc: { balance: 100 }
    }
)
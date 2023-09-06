//увеличить баланс всех юзеров из Германии и США на 100
db.users.updateMany(
    {
        country: {$in: ['Germany', 'USA']}        
    },   
    {
        $inc: {balance: 100}
    }    
)
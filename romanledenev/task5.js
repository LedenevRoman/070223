db.users.updateMany(
{is_blocked: {$ne: true}},
{$mul: {balance: 1.15}}
)
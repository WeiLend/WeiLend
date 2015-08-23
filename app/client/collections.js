// The WeiLend Categories
Categories = new Mongo.Collection('categories', {connection: null});
new PersistentMinimongo(Categories);
new WeiLend.CategoriesMinimongo(Categories);

// The WeiLend Loans
Loans = new Mongo.Collection('loans', {connection: null});
new PersistentMinimongo(Loans);
new WeiLend.LoansMinimongo(Loans);

// Available Web3 Accounts
Accounts = new Mongo.Collection('accounts', {connection: null});
web3.AccountsMinimongo(Accounts);
/**
WeiLend config

@module WeiLend
**/

/**
The address of the WeiLend contract.

@var (address)
**/

WeiLend.address = '0x953b7176eb2f4a16ca1c40ae8b264c84f7a8e9af';

/**
The default from account index.

e.g 1 would be used like web3.eth.accounts[1];

@var (account)
**/

WeiLend.account = 0;

/**
The ABI of the main contract.

@var (abi)
**/

WeiLend.abi = [
    {
      "constant":true,
      "inputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"loans(uint256)",
      "outputs":[
         {
            "name":"operationName",
            "type":"bytes32"
         },
         {
            "name":"owner",
            "type":"address"
         },
         {
            "name":"beneficiary",
            "type":"address"
         },
         {
            "name":"timelimit",
            "type":"uint256"
         },
         {
            "name":"fundingGoal",
            "type":"uint256"
         },
         {
            "name":"amount",
            "type":"uint256"
         },
         {
            "name":"balance",
            "type":"uint256"
         },
         {
            "name":"category",
            "type":"uint256"
         },
         {
            "name":"status",
            "type":"uint256"
         },
         {
            "name":"numFunders",
            "type":"uint256"
         },
         {
            "name":"config",
            "type":"address"
         },
         {
            "name":"interestRateM",
            "type":"uint256"
         }
         {
            "name":"gracePeriod",
            "type":"uint256"
         }
         {
            "name":"tenorM",
            "type":"uint256"
         }
         {
            "name":"installment",
            "type":"uint256"
         }
      ],
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[
         {
            "name":"addr",
            "type":"address"
         },
         {
            "name":"u_lid",
            "type":"uint256"
         }
      ],
      "name":"userLoans(address,uint256)",
      "outputs":[
         {
            "name":"_lid",
            "type":"uint256"
         }
      ],
      "type":"function"
    },
    {
        "type":"event",
        "inputs": [
            {
                "name":"_from"
                ,"type":"address"
                ,"indexed":true
            },
            {
                "name":"_lid"
                ,"type":"uint256"
                ,"indexed":true
            }
        ],
        "name":"onNewLoan"
    },
    {
        "type":"event",
        "inputs": [
            {
                "name":"_from"
                ,"type":"address"
                ,"indexed":true
            },
            {
                "name":"_lid"
                ,"type":"uint256"
                ,"indexed":true
            },
            {
                "name":"_value"
                ,"type":"uint256"
                ,"indexed":false
            }
        ],
        "name":"onContribute"
    },
    {
        "type":"event",
        "inputs": [
            {
                "name":"_from"
                ,"type":"address"
                ,"indexed":true
            },
            {
                "name":"_lid"
                ,"type":"uint256"
                ,"indexed":true
            },
            {
                "name":"_value"
                ,"type":"uint256"
                ,"indexed":false
            }
        ],
        "name":"onPayout"
    },
    {
        "type":"event",
        "inputs": [
            {
                "name":"_from"
                ,"type":"address"
                ,"indexed":true
            },
            {
                "name":"_lid"
                ,"type":"uint256"
                ,"indexed":true
            },
            {
                "name":"_value"
                ,"type":"uint256"
                ,"indexed":false
            }
        ],
        "name":"onRefund"
    },
    {
        "type":"event",
        "inputs": [
            {
                "name":"_from"
                ,"type":"address"
                ,"indexed":true
            },
            {
                "name":"_lid"
                ,"type":"uint256"
                ,"indexed":true
            },
            {
                "name":"_value"
                ,"type":"uint256"
                ,"indexed":false
            }
        ],
        "name":"onpayInstallment"
    },
    {
      "constant":false,
      "inputs":[
         {
            "name":"lid",
            "type":"uint256"
         }
      ],
      "name":"refund(uint256)",
      "outputs":[

      ],
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[
      ],
      "name":"numLoans",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[
         {
            "name":"operationName",
            "type":"bytes32"
         },
         {
            "name":"beneficiary",
            "type":"address"
         },
         {
            "name":"goal",
            "type":"uint256"
         },
         {
            "name":"timelimit",
            "type":"uint256"
         },
         {
            "name":"category",
            "type":"uint256"
         },
         {
            "name":"config",
            "type":"address"
         },
         {
            "name":"tenorM",
            "type":"uint256"
         },
         {
            "name":"interestRateM",
            "type":"uint256"
         },
         {
            "name":"gracePeriod",
            "type":"uint256"
         },
      ],      "name":"newLoan(bytes32,address,uint256,uint256,uint256,address,uint256,uint256,uint256)",
      "outputs":[
      ],
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "name":"users(address)",
      "outputs":[
         {
            "name":"numLoans",
            "type":"uint256"
         }
      ],
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[
         {
            "name":"lid",
            "type":"uint256"
         }
      ],
      "name":"contribute(uint256)",
      "outputs":[

      ],
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[
         {
            "name":"lid",
            "type":"uint256"
         }
      ],
      "name":"payout(uint256)",
      "outputs":[
      ],
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[
         {
            "name":"lid",
            "type":"uint256"
         }
      ],
      "name":"payInstallment(uint256)",
      "outputs":[
      ],
      "type":"function"
    }
];

/**
The Hex code of the contract.

@var (hex)
**/

/*WeiLend.hex = "6105ea8061000e6000396000f30060003560e060020a90048063141961bc1461006e57806319ac74bd146100bc578063278ecde1146100d45780632c0f7b6f146100e55780635694894a146100f7578063a87430ba14610117578063ac273aa21461012c578063c1cbbca714610140578063e11523431461015157005b61007960043561016a565b896000528860205287600160a060020a031660405286600160a060020a0316606052856080528460a0528360c0528260e052816101005280610120526101406000f35b6100ca600435602435610572565b8060005260206000f35b6100df6004356103b0565b60006000f35b6100ed610163565b8060005260206000f35b61011160043560243560443560643560843560a4356101c9565b60006000f35b6101226004356101b5565b8060005260206000f35b61013a6004356024356105b3565b60006000f35b61014b6004356102c9565b60006000f35b61015c6004356104c8565b60006000f35b5b60005481565b5b60005260016020526040600020805490806001015490806002015490806003015490806004015490806005015490806006015490806007015490806008015490806009015490508a565b5b600052600260205260406000208054905081565b60006000600060006000871180156101e057504286115b6101e9576102bd565b600080549081600101905593506001600085815260200190815260200160002092508983819055503383600201819055508883600101819055508783600301819055508683600501819055508583600401819055508483600701819055506002600033600160a060020a03168152602001908152602001600020915081805490816001019055905083826001016000838152602001908152602001600020819055508333600160a060020a03167f882da991e52c8933ce57314c9ba3f934798d912d862790c40d0feeb7025af08a60006000a35b50505050505050505050565b600060006000600034116102dc576103aa565b6001600085815260200190815260200160002092504283600401541015610302576103a9565b82600901805490816001019055915082600a0160008381526020019081526020016000209050338181905550348160010181905550806001015483600601818154019150819055508183600b01600033600160a060020a03168152602001908152602001600020819055508333600160a060020a03167fc5e578961e5bd7481ccf1d1bdfbad97b9f1ddfad520f061ca764a57018f3febe6000866006015481526020016000a35b5b50505050565b600060006001600084815260200190815260200160002091508160040154421180156103e3575081600501548260060154105b80156103f3575060008260060154115b6103fc576104c3565b81600a01600083600b01600033600160a060020a0316815260200190815260200160002054815260200190815260200160002090506000816001015411610442576104c2565b8054600160a060020a0316600082600101546000600060006000848787f161046657005b505050806001015482600601818154039150819055508233600160a060020a03167fe139691e7435f1fb40ec50ed3729009226be49087fd00e9e5bac276c2a8f40cf6000846001015481526020016000a3600081600101819055505b5b505050565b60006001600083815260200190815260200160002090508060050154816006015410156104f45761056e565b8060030154600160a060020a0316600082600601546000600060006000848787f161051b57005b5050508133600160a060020a03167f6be92574b1386f424263a096e8b66ff6cc223ab0f9d18702563aa339a372cf986000846006015481526020016000a360008160060181905550600181600801819055505b5050565b600060006002600085600160a060020a0316815260200190815260200160002090508060010160008481526020019081526020016000205491505092915050565b6000600060016000858152602001908152602001600020905080600a0160008481526020019081526020016000209150509291505056";*/

WeiLend.hex = "6107608061000e6000396000f30060003560e060020a90048063141961bc1461006e57806319ac74bd146100cf578063278ecde1146100e75780632c0f7b6f146100f8578063a87430ba1461010a578063ac273aa21461011f578063c06f4c1d14610133578063c1cbbca714610159578063e11523431461016a57005b610079600435610183565b8b6000528a60205289600160a060020a031660405288600160a060020a0316606052876080528660a0528560c0528460e05283610100528261012052816101405280600160a060020a0316610160526101806000f35b6100dd6004356024356106e8565b8060005260206000f35b6100f2600435610454565b60006000f35b61010061017c565b8060005260206000f35b6101156004356101da565b8060005260206000f35b61012d600435602435610729565b60006000f35b61015360043560243560443560643560843560a43560c43560e4356101ee565b60006000f35b610164600435610302565b60006000f35b6101756004356105dd565b60006000f35b5b60005481565b5b6000526001602052604060002080549080600101549080600201549080600301549080600401549080600501549080600601549080600701549080600801549080600901549080600c01549080600d015490508c565b5b600052600260205260406000208054905081565b600060006000600060008811801561020557504287115b61020e576102f4565b600080549081600101905593506001600085815260200190815260200160002092508b83819055508a83600101819055503383600201819055508883600301819055508783600501819055508683600401819055508583600701819055508983600c01819055508483600d01819055506002600033600160a060020a03168152602001908152602001600020915081805490816001019055905083826001016000838152602001908152602001600020819055508333600160a060020a03167f882da991e52c8933ce57314c9ba3f934798d912d862790c40d0feeb7025af08a60006000a35b505050505050505050505050565b600060006000600034116103155761044e565b600160008581526020019081526020016000209250428360040154101561033b5761044d565b82600901805490816001019055915082600a0160008381526020019081526020016000209050338181905550348160010181905550806001015483600601818154019150819055508183600b01600033600160a060020a03168152602001908152602001600020819055508333600160a060020a03167fc5e578961e5bd7481ccf1d1bdfbad97b9f1ddfad520f061ca764a57018f3febe6000866006015481526020016000a3600083600d0154600160a060020a031614156103fc5761044c565b82600d0154600160a060020a03166249f068600060008260e060020a02600052600488815260200133600160a060020a03168152602001348152602001600060008660325a03f161044957005b50505b5b5b50505050565b60006000600160008481526020019081526020016000209150816004015442118015610487575081600501548260060154105b8015610497575060008260060154115b6104a0576105d8565b81600a01600083600b01600033600160a060020a03168152602001908152602001600020548152602001908152602001600020905060008160010154116104e6576105d7565b8054600160a060020a0316600082600101546000600060006000848787f161050a57005b505050806001015482600601818154039150819055508233600160a060020a03167fe139691e7435f1fb40ec50ed3729009226be49087fd00e9e5bac276c2a8f40cf6000846001015481526020016000a360008160010181905550600082600d0154600160a060020a03161415610580576105d6565b81600d0154600160a060020a031663b71f3cde600060008260e060020a0260005260048781526020018554600160a060020a0316815260200185600101548152602001600060008660325a03f16105d357005b50505b5b5b505050565b6000600160008381526020019081526020016000209050806005015481600601541015610609576106e4565b8060030154600160a060020a0316600082600601546000600060006000848787f161063057005b5050508133600160a060020a03167f6be92574b1386f424263a096e8b66ff6cc223ab0f9d18702563aa339a372cf986000846006015481526020016000a36000816006018190555060018160080181905550600081600d0154600160a060020a0316141561069d576106e3565b80600d0154600160a060020a031663484ec26c600060008260e060020a02600052600486815260200185600601548152602001600060008660325a03f16106e057005b50505b5b5050565b600060006002600085600160a060020a0316815260200190815260200160002090508060010160008481526020019081526020016000205491505092915050565b6000600060016000858152602001908152602001600020905080600a0160008481526020019081526020016000209150509291505056";

/**
Website URL.

@var (url)
**/

WeiLend.url = 'http://weilend.io/';

/**
The image suffix for handling image urls in WeiLend.

i.e. http://your_website.com/weilend.jpg

@var (imageSuffix)
**/

WeiLend.imageSuffix = '/weilend.jpg';

/**
Available categories.

@var (categories)
**/

WeiLend.categories = ["Business", "Technology", "Music", "Arts", "Cryptocurrency", "Dance", "Fashion", "Film", "Community", "Food", "Games", "Education", "Cause", "Politics"];

/**
The transaction hash of the WeiLend contract. For display purposes.

@var (tx_hash)
**/

WeiLend.tx_hash = '0x0618faa5189babe5618f618faa5189babe586df5693db47aa5189babe586df5693db4786df5693618faa5189babe586df5693db47db47330694a27dcd';

/**
The default amount of gas to use for transactions.

@var (defaultGas)
**/

WeiLend.defaultGas = 950000;

// Setup WeiLend
WeiLend.setup();

/*
// WeiLend System
// Start, lend, payout and return interest yield to funders
// @creator of the original WeiFund code:
// Nick Dodson <thenickdodson@gmail.com>
// @forked to implement the WeiLend by:
// M. Terzi <ma.terzi@tiscali.it> ===> http://github.com/terzim
// If goal is not reached and campaign is expired, contributers can get their donation refunded individually
// If goal is reached by alloted time, contributions can still be made
// After a grace period, the beneficiary returns funds to the funders in installments at a given interest rate

contract WeiLendConfig 
{ 
    function onContribute(uint lid, address addr, uint amount){} 
    function onRefund(uint lid, address addr, uint amount){} 
    function onPayout(uint lid, uint amount){}
    function onpayInstallment(uint lid, address addr, uint balance)
}

contract WeiLend {
// builds a variable (struct) called User which has two sub-variables, an integer number called numLoans and a mapping of 
    // loans.
    
    struct User
    {
        uint numLoans;
        mapping(uint => uint) loans;
    }
    
    // builds a variable (struct) called Funder which is identified by an address (his public "signature"), and an amount which he has lent
    // which will define his/her entitlement to the installments repayments. 
    
    struct Funder 
    {
        address addr;
        uint amount;
    }
    
     // builds a variable (struct) called Loan. This is the most complex variable of the set. The most important here are the sub-variables:
     // timelimit [the time for which the Loan is open to funding], fundingGoal [the amount that the guy who gets the
     // loan wants to collect], and the key contractual features of the loan which are the interest_rate, the        
     // gracePeriod and the tenor. 
     
     // importantly, this variable contains a map of the funders and a pointer to the funders. 
     
    struct Loan 
    {
        bytes32 operationName;
        address owner;
        address beneficiary;
        address config; 
        uint timelimit;
        uint fundingGoal;
        uint amount;
        uint balance;
        uint category;
        uint status;
        uint numFunders;
        uint interestRateM; // monthly         
        uint gracePeriod;
        uint tenorM; // monthly
        uint installment; // monthly
        mapping (uint => Funder) funders;
        mapping (address => uint) toFunder;
    }
  
    uint public numLoans;
    mapping (uint => Loan) public loans;
    mapping (address => User) public users;
    

    //events are returned after functions are successfully called
   
    event onRefund(address indexed _from, uint indexed _lid, uint _value);
    event onpayInstallment(address indexed _from, uint indexed _lid, uint _value);

     modifier hasValue { if(msg.value > 0) _ }

 function newLoan(bytes32 _operationName, address _beneficiary, uint _goal, uint _timelimit_m, uint _category, uint _interest_rate, uint _grace_period_m, uint _tenor_a, address _config)
    {
    
        // if the goal (one of the parameters of the function assigned by the person 
        // who runs the function is greater than zero [not sure this shoudl stay here though]
        // and the timelimit is greater than now (that is, the campaign has not expired] do....  
        
        if(_goal > 0 ){
            
            // initialize a new variable called lid, which is a counter for the numLoans (defined earlier as a public integer variable)
            uint lid = numLoans++; // campaignID is return variable
            // creates a loan called l which will corrispond the [position lid in the mapping of all loans]
            Loan l = loans[lid];  // assigns reference
            l.operationName = _operationName; // vanity
            // again assign to the loan l the beneficiary defined by the argument of the function
            l.beneficiary = _beneficiary;
            // again assign to the loan l the fundingGoal defined by the argument of the function
            l.fundingGoal = _goal;
            l.owner = msg.sender;
            // again assign to the loan l the timelimit defined by the argument of the function
            l.timelimit = block.timestamp + (_timelimit_m * 43200);
            // again assign to the loan l the category defined by the argument of the function
            l.category = _category;
            // again assign to the loan l the interest rate defined by the argument of the function
            l.interestRateM = _interest_rate / 12;
            // again assign to the loan l the grace period defined by the argument of the function
            l.gracePeriod = _grace_period_m * 43200;
            // again assign to the loan l the tenor defined by the argument of the function (note, tenor meant to be after grace period)
            l.tenorM = _tenor_a * 12;
            l.config = _config;
            // now creates a user called u, which is the sender of the transaction
            User u = users[msg.sender];
            // creates a variable called u_lid, which adds a one to the number of loans the user has made.
            uint u_lid = u.numLoans++;
            u.loans[u_lid] = lid;
            
            // calls the event onNewLoan
            onNewLoan(msg.sender, lid);
        }
    }
 
 function contribute(uint _lid) hasValue
    {
        Loan l = loans[_lid]; // Cannot be expired.
        
        // if the raising is not yet terminated
        if(l.timelimit >= block.timestamp) {
            uint fid = l.numFunders++;
            Funder f = l.funders[fid];
            f.addr = msg.sender;
            f.amount = msg.value;
            //increases the loan amount by the contribution
            l.amount += f.amount;
            //sends a funder id to the funder
            l.toFunder[msg.sender] = fid;
            onContribute(msg.sender, _lid, l.amount);

            if(l.config != address(0))
                WeiLendConfig(l.config).onContribute(_lid, msg.sender, msg.value);

        }
    }

 function refund(uint _lid)
    {
        Loan l = loans[_lid];
        if (block.timestamp > l.timelimit 
        && l.amount < l.fundingGoal && l.amount > 0){
            Funder f = l.funders[l.toFunder[msg.sender]];
            if(f.amount > 0){
                f.addr.send(f.amount);
                l.amount -= f.amount;
                onRefund(msg.sender, _lid, f.amount);
                f.amount = 0;
            
                if(l.config != address(0))
                    WeiLendConfig(l.config).onRefund(_lid, f.addr, f.amount);

            }
        }
    }

 function payout(uint _lid)
    {
        Loan l = loans[_lid];
        if (l.amount >= l.fundingGoal){
            //calculates the monthly installment amount. Constant installment loan
            l.installment = l.amount * ((l.interestRateM*((1+l.interestRateM)**(l.tenorM)))/(((1+l.interestRateM)**(l.tenorM))-1));            
            l.beneficiary.send(l.amount);
            l.balance = l.amount;
            l.timelimit = l.timelimit + l.gracePeriod;

            onPayout(msg.sender, _lid, l.amount);
            l.amount = 0;            
            l.status = 1;

            if(l.config != address(0))
                WeiLendConfig(l.config).onPayout(_lid, l.amount);

        }
    }

 function payInstallment(uint _lid)
    {
        Loan l = loans[_lid];
        //returns if the borrower is paying a wrong installment amount (error handling)
        if (msg.value != l.installment){
            msg.sender.send(msg.value);
            return;
        }

        //returns if the grace period is not over
        if (block.timestamp < l.timelimit) return;
        //returns if the loan balance is below zero (error handling)
        if (l.balance < 0) return;

        uint i = 0;
        uint n = l.numFunders;
        
        //maybe the while is not needed here. Could use the toFunder functionality?
        //in essence this loops returns to each funder his/her quota of the total installment 
        while(i<n){
            uint entitlement = l.installment*l.funders[i].amount/l.amount;
            l.funders[i].addr.send(entitlement);
            i++; //added counter. Need to check with Ken if needed
        }
  
        //updates the balance of the loan. The installment remains constant throughout the duration of the loan but the balance
        //decreases of the principal amount paid along with the installment. 
        l.balance -= (l.installment -(l.balance*l.interestRateM)); 
        onpayInstallment(msg.sender, _lid, l.balance);

    }

    function userLoans(address _addr, uint _u_lid) returns (uint lid)
    {
        User u = users[_addr];
        lid = u.loans[_u_lid];
    }

}

*/

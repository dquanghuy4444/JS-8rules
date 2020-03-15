const actions = {
    '3': ['processing','IndexPage'],
    '1': ['fail','FailPage'],
    '2': ['fail','FailPage'],
    '4': ['success','SuccessPage'],
    '5': ['cancel','CancelPage'],
    'default': ['other','Index'],
  }
   status=4;
    let action = actions[status],
        logName = action[0],
        pageName = action[1];
       alert(logName);
       console.log(Object.keys(actions).length);


       const actions = ()=>{
        const functionA = ()=>{/*do sth*/}
        const functionB = ()=>{/*do sth*/}
        return new Map([
          [{identity:'guest',status:1},functionA],
          [{identity:'guest',status:2},functionA],
          [{identity:'guest',status:3},functionA],
          [{identity:'guest',status:4},functionA],
          [{identity:'guest',status:5},functionB],
          //...
        ])
      }
       
      const onButtonClick = (identity,status)=>{
        let action = [...actions()].filter(([key,value])=>(key.identity == identity && key.status == status))
        action.forEach(([key,value])=>value.call(this))
      }
      
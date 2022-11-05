"use strict"

const data = [

{
    "Id": "001",
    "Title":"706 timer",
    "Description":[{
      "MODEL" :"TMDE706SC",
      "Voltage" : "AC200-240V",
      "CYCLE TIME" : "7H54M/6H35M",
      "Material"   : "COPPER+PLASTIC"
  }],
    "Brand":"none",
    "Chatagery" :"Cooling Items",
    "Src":""
    
  },
  {
    "Id": "002",
    "Title":"Mullar 3/8 Coppertube Copper pipe",
    "Description":[{
      "Size" : ["1/2", "5/8", "1/4"]
  }],
    "Brand":[
      "MUELLER",
      "Copper Tech",
      "chinese"
    ],
    "Chatagery" :"Copper Pip",
    "Src":""
    
  },
  {
    "Id": "003",
    "Title":"3/8 Elbo ",
    "Description":[{
      
              "Size" :[ "1/2","5/8","1/4"]
        }],
    "Brand":[
      "chinese",
      "Copper Tech",
      "MUELLER"
    ],
    "Chatagery" :"Copper Pip",
    "Src":""
    
  },
  {
    "Id": "004",
    "Title":"Refrigerator Temperature Controller  Refrigeration Heating Thermostat alarm Digital intelligent thermostat",
    "Description":[{
      "Model":["STC-1000","xh-w3001","ETC-974"]

    }],
    "Brand":"none",
    "Chatagery" :"Cooling Items",
    "Src":""
    
  },
  {
    "Id": "005",
    "Title":"Refrigerator Wire Tube Condenser",
    "Description":[{
        "Model": ["U8","U9","U10","U11","U12"]
      }],
    "Brand":"None",
    "Chatagery" :"Heating Item",
    "Src":""
    
  },
  {
    "Id": "006",
    "Title":"Refrierator Compressor  110Watt - 400Watt ++",
    "Description": null,
    "Brand":["Kulthorn","LG","Tecomsa","GMCC","Cecop","Penasonic","Bristol","Hitachi","Walton"],
    "Chatagery" :"Cooling Items",
    "Src":""
    
  }]

// let idName = []
// const store = data.map( (p)=>  console.log(p.Brand))
const storeFilter = data.filter( (datas) => { return datas.Chatagery === "Cooling Items" })

console.log(storeFilter)

console.log("___________END________")
console.log("=====================")
console.log("______Start________")

storeFilter.map((p) => console.log(p.Brand) )

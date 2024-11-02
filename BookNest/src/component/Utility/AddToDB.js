const getStoreData=()=>{
 const storeList= localStorage.getItem("read-list");
 if(storeList){
  const getStoreList=JSON.parse(storeList)
  return getStoreList
 }
 else{
  return []
 }
}
const addStoreData=(id)=>{
 const storeData=getStoreData()
 if(storeData.includes(id)){
  console.log('already existed')
 }
 else{
  storeData.push(id)
  const storeDataStr=JSON.stringify(storeData)
  localStorage.setItem("read-list", storeDataStr);
 }
}

const getWishListStoreData=()=>{
  const storeList= localStorage.getItem("wish-list");
  if(storeList){
   const getStoreList=JSON.parse(storeList)
   return getStoreList
  }
  else{
   return []
  }
 }
 const addWishListStoreData=(id)=>{
  const storeWishListData=getWishListStoreData()
  if(storeWishListData.includes(id)){
   console.log('already existed')
  }
  else{
   storeWishListData.push(id)
   const storeWishListDataStr=JSON.stringify(storeWishListData)
   localStorage.setItem("wish-list", storeWishListDataStr);
  }
 }


export{addStoreData,addWishListStoreData}

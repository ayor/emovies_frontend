

function removeProperty(obj, prop) {
    if(obj[prop]){
    delete obj[prop];
    return true;
    }
    return false;
  }




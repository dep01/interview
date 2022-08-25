const modelOfDatalocationModel = {
	coords: modelOfDatacoords,
	mocked: false,
	timestamp: 0
};
function listOflocationModel(data = []) {
  var listData = [modelOfDatalocationModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				coords: objectOfcoords(val.coords ?? null),
				mocked: val.mocked ?? null,
				timestamp: val.timestamp ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOflocationModel(data = null) {
  var objectData = modelOfDatalocationModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.coords = objectOfcoords(data.coords ?? null);
		objectData.mocked = data.mocked ?? null;
		objectData.timestamp = data.timestamp ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOflocationModel: listOflocationModel,
  objectOflocationModel: objectOflocationModel,
};

const modelOfDatacoords = {
	accuracy: 0,
	altitude: 0,
	heading: 0,
	latitude: 0,
	longitude: 0,
	speed: 0
};
function objectOfcoords(data = null) {
  var objectData = modelOfDatacoords;
  if (data == null) {
    return null;
  }
  try {
		objectData.accuracy = data.accuracy ?? null;
		objectData.altitude = data.altitude ?? null;
		objectData.heading = data.heading ?? null;
		objectData.latitude = data.latitude ?? null;
		objectData.longitude = data.longitude ?? null;
		objectData.speed = data.speed ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}



  
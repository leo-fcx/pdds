/**
 * Rest API end point which allows to send allowed request to the an API resource.
 */
class RestAPIEndPoint {

  /**
   * @param {String} path - URI for the end-point
   */
  constructor(path) {
    this.path = path;
  }

  /**
   * Returns all the objects or specific object if id was provided.
   *
   * @param {String} id - Optional, UUID of the object to fetch
   */
  fetch(id = null) {
    throw 'Not implemented';
  }

  /**
   * Creates new object using data provided.
   *
   * @param {Object} data - Object information
   */
  create(data) {
    throw 'Not implemented';
  }

  /**
   *
   * @param {String} id - UUID of the object to update
   */
  update(id){
    throw 'Not implemented';
  }

  /**
   * Deletes an object with the specified ID
   *
   * @param {String} id - UUID of the object to update
   */
  remove(id){
    throw 'Not implemented';
  }
}

export default RestAPIEndPoint;
/**
 * Rest API end point which allows to send allowed request to the an API resource.
 */
class EndPoint {

  /**
   * @param {String} path - for the end-point
   */
  constructor(path) {
    this.path = path;
  }

  fetchAll() {
    throw 'Not implemented';
  }

  /**
   * @param {String} id - Optional, UUID of the object to fetch
   */
  fetch(id = null) {
    throw 'Not implemented';
  }

  /**
   * @param {Object} data - Object information
   */
  create(data) {
    throw 'Not implemented';
  }

  /**
   * @param {String} id - UUID of the object to update
   */
  update(id){
    throw 'Not implemented';
  }

  /**
   * @param {String} id - UUID of the object to update
   */
  remove(id){
    throw 'Not implemented';
  }
}

export default EndPoint;
/**
 * Base Rest API.
 */
class RestAPI{

  /**
   * @param {Object} resources - API end-points
   */
  constructor(resources) {
    this.resources = resources;
  }
}

export default RestAPI;
/**
 * Base Rest API.
 */
class RestAPI{

  /**
   * @param {String} url - API url
   * @param {Object} resources - API resources
   */
  constructor(url, resources) {
    this.resources = resources;
  }
}

export default RestAPI;
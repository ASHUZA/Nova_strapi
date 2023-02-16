'use strict';

/**
 * chief router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::chief.chief');

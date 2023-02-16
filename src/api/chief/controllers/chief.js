'use strict';

/**
 * chief controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chief.chief');

'use strict';

/**
 * recipes-comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipes-comment.recipes-comment');

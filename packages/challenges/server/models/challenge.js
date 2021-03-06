/**
 * Copyright (c) 2014 TopCoder, Inc. All rights reserved.
 */
'use strict';


var postgresql = require('postgresql-sequelize');
var Sequelize = postgresql.Sequelize;
// var DataTypes = Sequelize;
var sequelize = postgresql.sequelize;

// Challenge model
sequelize.define('Challenge', {
    regStartDate: Sequelize.DATE,
    subEndDate: Sequelize.DATE,
    title: {
      type: Sequelize.STRING(128),
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    type: Sequelize.STRING(32),
    overview: Sequelize.STRING(140),
    description: Sequelize.TEXT,
    registeredDescription: Sequelize.TEXT,
    tags: Sequelize.ARRAY(Sequelize.TEXT),
    status: Sequelize.ENUM('draft', 'started')
  },
  {tableName: 'challenges'}
);




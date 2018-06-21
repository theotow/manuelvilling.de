const awsServerlessExpress = require('aws-serverless-express')
const express = require('./express')(true)
const server = awsServerlessExpress.createServer(express.server)

module.exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
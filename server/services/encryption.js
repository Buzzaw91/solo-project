/* const express = require('express');
const VirgilCrypto = require('@virgilsecurity/e3kit-node');
const JwtGenerator = require('virgil-sdk');
const  VirgilAccessTokenSigner = require('virgil-crypto');

const virgilCrypto = new VirgilCrypto();
// initialize accessTokenSigner that signs users JWTs
const accessTokenSigner = new VirgilAccessTokenSigner(virgilCrypto);

// import your App Key that you got in Virgil Dashboard from string.
const appKey = virgilCrypto.importPrivateKey(process.env.VIRGIL_APP_KEY_BASE64);

// initialize JWT generator with your App ID and App Key ID you got in
// Virgil Dashboard and the `appKey` object you've just imported.
const jwtGenerator = new JwtGenerator({
  appId: process.env.VIRGIL_APP_ID,
  apiKey: appKey,
  apiKeyId: process.env.VIRGIL_APP_KEY_ID,
  accessTokenSigner: accessTokenSigner,
  millisecondsToLive:  20 * 60 * 1000 // JWT lifetime - 20 minutes (default)
});

exports.virgilJWT = (req, res) => {
  // Get the identity of the user making the request (this assumes the request
  // is authenticated and there is middleware in place that populates the
  // `req.user` property with the user record).
  // Identity can be anything as long as it's unique for each user (e.g. email,
  // name, etc.). You can even obfuscate the identity of your users so that
  // Virgil Security doesn't know your actual user identities.
  const jwt = jwtGenerator.generateToken(req.user.email);
  req.send(jwt.toString());
}; */

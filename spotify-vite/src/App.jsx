import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

function App() {
  // Code Verifier
  function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  // Code Challenge
  // run once 'Code Verifier' has been generated
  async function generateCodeChallenge(codeVerifier) {
    function base64encode(string) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
  }

  let randomString = generateRandomString(5);
  let codeChallenge = generateCodeChallenge(randomString);
  console.log(codeChallenge)

  return (
    <>
      <h1>Test</h1>
      {/* <p>{ codeChallenge() }</p> */}
    </>
  )
}

export default App

'use strict';

/* coded by syawaltech */

var request = require('request');
var cheerio = require('cheerio');
var readlin = require('readline')

const ask = readlin.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Get {
  jumlah(getAll){
    return getAll;
  }
}

process.stdout.write('\n[*] info : INJECT VOC PB ZEPETTO [*]\n');

ask.question('\n[?] jumlah ? [1-10] : ', (jm) => {
  let get = new Get();
  const url = 'https://beraxxsjas.000webhostapp.com/spotify/?jumlah='+get.jumlah(jm);
  console.log(`\n[#] geting ${jm} accounts ... \n`);
  request.get(url, (err, res, body) => {
    if (err) throw err;
    let $ = cheerio.load(body);
    $('table tr').each((i, value) => {
    $(value).find('td').each((j, data) => {
      var dt = $(data).text().split()
      return console.log('[/] ' + dt[0].replace('\n', ''));
    }); ask.close(); });
  console.log('\n');
  })
})

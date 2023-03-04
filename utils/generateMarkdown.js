// TODO: Create a function that returns a license badge based on which license is passed in
const dayjs = require('dayjs');
const today=dayjs().format('YYYY');//Day.Js is used to capture current year for the licence
function renderLicenseBadge(licences) {
  let licenceBadge="";
  if (licences!=='none') {
    licenceBadge=`[![License: ${licences}](https://img.shields.io/badge/License-${licences}-blue.svg)](${renderLicenseLink(licences)})`
  } 
return licenceBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licencelink="";
  if (license!=='none') {
    licencelink='';
    licencelink=`https://opensource.org/licenses/${license}`
  }

return licencelink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenceSection='';
  let LicenceName="";
  switch(license){
    case 'MIT':
      licenceSection=`Permission is hereby granted, free of charge, to any person obtaining a copy of<br>this software and associated documentation files (the “Software”), to deal in<br>the Software without restriction, including without limitation the rights to use,<br>copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the<br>Software, and to permit persons to whom the Software is furnished to do so,<br>subject to the following conditions:<br><br>The above copyright notice and this permission notice shall be included in all<br>copies or substantial portions of the Software.<br><br>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,<br>EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES<br>OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND<br>NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT<br>HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,<br>WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING<br>FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR <br>OTHER DEALINGS IN THE SOFTWARE.`
      
      break;
    case 'Apache_2.0':
      licenceSection=`Licensed under the Apache License, Version 2.0 (the \"License\");<br>you may not use this file except in compliance with the License.<br>You may obtain a copy of the License at<br><br>[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)<br><br>Unless required by applicable law or agreed to in writing, software<br>distributed under the License is distributed on an \"AS IS\" BASIS,<br>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or<br>implied.<br>See the License for the specific language governing permissions and <br>limitations under the License.`
      break;
    case 'GPLv3':
        licenceSection=`This program is free software: you can redistribute it and/or modify<br>it under the terms of the GNU General Public License as published by<br>the Free Software Foundation, either version 3 of the License, or<br>(at your option) any later version.<br><br>This program is distributed in the hope that it will be useful,<br><br>but WITHOUT ANY WARRANTY; without even the implied warranty of<br>MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the<br>GNU General Public License for more details.`
      break;
    case 'BSD_3_Clause':
        licenceSection=`Redistribution and use in source and binary forms, with or without <br>modification, are permitted provided that the following conditions are met:<br><br>1. Redistributions of source code must retain the above copyright notice, this <br>of conditions and the following disclaimer.<br><br>2. Redistributions in binary form must reproduce the above copyright notice,<br>this list of conditions and the following disclaimer in the documentation and/or<br>other materials provided with the distribution.<br>3. Neither the name of the copyright holder nor the names of its contributors<br>may be used to endorse or promote products derived from this software<br>without specific prior written permission.<br><br>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND<br>ANY EXPRESS OR IMPLIED WARRANTIES,<br>INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF<br>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE<br>DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR<br>CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,<br>SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT<br>NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;<br>LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER<br>CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,<br>STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)<br>ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF<br>ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
      break;
    default:
    licenceSection='';
      

}
return licenceSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//   return `# ${data.title}
    return `# ${data.title}\n\n${renderLicenseBadge(data.licences)}\n\n ## Description\n\n${data.description}\n\n ## Installation\n${data.installation}\n\n ## Usage\n${data.usage}\n\n## Contributing \n\n${data.contributing} \n\n ## Questions \n\n [${data.gitHubUsername}](https://github.com/${data.gitHubUsername}) \n\n For more questions contact us with [${data.email}](mailto:${data.email}) \n\n # Licences \n\n Copyrite (c) ${today} ${data.gitHubUsername} \n\n ${renderLicenseSection(data.licences)}`
// `;
}

module.exports = generateMarkdown

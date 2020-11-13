# JavaScript end-to-end deploy Express.js virtual machine to Azure

For a complete tutorial, please use the [Microsoft Documentation tutorial found here](https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/nodejs-virtual-machine-vm/introduction). 

## Express.js

The Express.js app is a basic web page for the root route to return text. The local app uses port 3000. 

Because this app is used as a base for tutorials, the main branch is sparse on purpose. 

## VM configuration with cloud-init-github.txt

The VM [cloud-init file](./cloud-iit-github.txt) to pull this repo into an [Azure Linux VM](https://docs.microsoft.com/azure/virtual-machines/linux) is provided for you. 

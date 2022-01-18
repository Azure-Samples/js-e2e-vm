# Create Azure Monitor resource

1. Add Azure CLI extension

    ```azurecli
    az extension add -n application-insights
    ```

1. Create Azure Monitor resource

    ```azurecli
    az monitor app-insights component create \
      --app demoWebAppMonitor \
      --location eastus \
      --resource-group rg-demo-vm-eastus \
      --query instrumentationKey --output table    
    ```

1. View logs

    ```azurecli
    az monitor app-insights metrics show \
        --resource-group rg-demo-vm-eastus \
        --app demoWebAppMonitor \
        --metric traces/count    
    ```
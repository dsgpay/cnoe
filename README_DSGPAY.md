# confgi AWS
        aws configure
        AKIAXSX562THZJ5FILUE
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        ap-southeast-1

# confirm AWS config
        aws sts get-caller-identity

# Folk repo
        https://github.com/cnoe-io/reference-implementation-aws


# Find and repelace all in repo

    us-west-2 - > ap-southeast-1




# Follow README.md step

# Step 7. ☸️ Create EKS Cluster

❓ Which tool would you like to use for cluster creation?
2) terraform (Infrastructure as Code)

❓ Which type of EKS cluster would you like to create?
1) Auto Mode cluster (Recommended for new users)

# Test k9s

        k9s

# Disable packages/addons/values.yaml

aws-load-balancer-controller:
  enabled: false

external-dns:
  enabled: false


# setup step 8

        meanwile if get ingress url go to map at Route 54
        cnoe.dsgpay.com -> cnoe-a191e310a4e111ae.elb.ap-southeast-1.amazonaws.com
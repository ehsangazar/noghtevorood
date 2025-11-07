# DNS Setup for noghtevorood.com

## Step 1: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Custom domain**, enter: `noghtevorood.com`
4. Click **Save**
5. Wait for DNS check to complete (this may take a few minutes)
6. Once verified, check **Enforce HTTPS**

## Step 2: Configure DNS Records

Go to your domain registrar (where you bought `noghtevorood.com`) and add the following DNS records:

### Option A: Using CNAME (Recommended if using www)

If you want to use `www.noghtevorood.com`:

```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600 (or default)
```

Then set up a redirect from apex domain:
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

### Option B: Using Apex Domain (noghtevorood.com without www)

Add these A records:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or default)
```
```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.109.153
TTL: 3600 (or default)
```
```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.110.153
TTL: 3600 (or default)
```
```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.111.153
TTL: 3600 (or default)
```

### Option C: Both www and Apex (Recommended)

Set up all A records from Option B, and add:

```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600 (or default)
```

## Step 3: Verify Configuration

1. DNS propagation can take 24-48 hours (usually much faster, often 1-2 hours)
2. Check propagation status: https://dnschecker.org/
3. Once propagated, visit `https://noghtevorood.com`
4. GitHub will automatically provision an SSL certificate

## Common DNS Providers

### Namecheap
1. Log into Namecheap account
2. Go to **Domain List** > Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add the A records or CNAME as specified above

### GoDaddy
1. Log into GoDaddy account
2. Go to **My Products** > **DNS**
3. Click on your domain
4. Add the A records or CNAME as specified above

### Cloudflare
1. Log into Cloudflare account
2. Select your domain
3. Go to **DNS** > **Records**
4. Add the A records or CNAME as specified above
5. Make sure SSL/TLS mode is set to **Full** or **Flexible**

### Google Domains / Google Cloud DNS
1. Log into Google Domains
2. Click on your domain
3. Go to **DNS** section
4. Add the A records or CNAME as specified above

### Other Providers
The process is similar - look for DNS settings or DNS management in your domain control panel.

## Troubleshooting

### "Domain's DNS record could not be retrieved"
- Wait a few minutes and try again
- DNS changes can take time to propagate
- Verify your A records are correct

### Site not loading after DNS setup
1. Clear your browser cache
2. Try incognito/private mode
3. Wait for DNS propagation (use dnschecker.org)
4. Verify A records point to all four GitHub IPs

### HTTPS not working
1. Ensure DNS is properly configured
2. In GitHub Pages settings, check **Enforce HTTPS**
3. Wait up to 24 hours for SSL certificate provisioning
4. Try accessing via http:// first, then GitHub will redirect to HTTPS

### "ERR_TOO_MANY_REDIRECTS"
- Check if you have conflicting DNS records
- If using Cloudflare, set SSL mode to **Full**
- Remove any extra CNAME or redirect rules

## Verification

Once DNS is configured and propagated:

```bash
# Check DNS resolution
nslookup noghtevorood.com

# Check if it resolves to GitHub IPs
dig noghtevorood.com

# Test HTTPS
curl -I https://noghtevorood.com
```

Expected DNS resolution to one of:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

## Security

- ✅ HTTPS is automatically enabled via Let's Encrypt
- ✅ SSL certificate auto-renews
- ✅ Secure by default with GitHub Pages

## Need Help?

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
2. Verify DNS records with your provider
3. Allow sufficient time for DNS propagation
4. Contact your DNS provider support if records aren't saving

---

**Note**: The CNAME file is already created in `/public/CNAME` and will be automatically deployed with your site.


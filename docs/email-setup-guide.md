# EmailJS Setup Guide for Edukai Beta Signup

This guide will help you set up automatic email notifications for the Edukai beta signup form **completely FREE**.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address
4. Log into your EmailJS dashboard

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" 
3. Choose "Gmail" (recommended for free tier)
4. Connect your Gmail account (tristan68420@gmail.com)
5. Note down the **Service ID** (e.g., `service_xyz123`)

## Step 3: Create Email Templates

You need to create 2 templates:

### Template 1: Admin Notification (when someone signs up)

1. Go to "Email Templates" → "Create New Template"
2. Template Name: `New Beta Signup Notification`
3. Template ID: `template_new_beta_signup`
4. **Subject**: `🎉 Nouvelle inscription Beta Edukai - {{user_name}}`
5. **Content**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
        <h1>🎉 Nouvelle inscription Beta !</h1>
    </div>
    
    <div style="padding: 30px; background: #f8f9fa;">
        <h2 style="color: #333;">Détails de l'utilisateur</h2>
        
        <div style="background: white; padding: 20px; border-radius: 10px; margin: 15px 0;">
            <p><strong>👤 Nom :</strong> {{user_name}}</p>
            <p><strong>📧 Email :</strong> {{user_email}}</p>
            <p><strong>🎓 Établissement :</strong> {{university}}</p>
            <p><strong>📚 Niveau d'études :</strong> {{study_level}}</p>
            <p><strong>📅 Date d'inscription :</strong> {{signup_date}} à {{signup_time}}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666;">Email automatique envoyé par le système Edukai</p>
        </div>
    </div>
</div>
```

### Template 2: Welcome Email (for new user)

1. Create another template
2. Template Name: `Welcome to Edukai Beta`
3. Template ID: `template_welcome_user`
4. **Subject**: `🚀 Bienvenue dans l'aventure Edukai, {{to_name}} !`
5. **Content**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
        <h1>🚀 Bienvenue {{to_name}} !</h1>
        <p style="font-size: 18px; margin: 10px 0;">Votre inscription à la beta Edukai est confirmée</p>
    </div>
    
    <div style="padding: 30px; background: #f8f9fa;">
        <h2 style="color: #333;">🎉 Que se passe-t-il maintenant ?</h2>
        
        <div style="background: white; padding: 20px; border-radius: 10px; margin: 15px 0;">
            <h3 style="color: #667eea;">✅ Votre place est réservée</h3>
            <p>Vous faites partie des privilégiés qui auront un accès prioritaire à Edukai en <strong>juillet 2025</strong>.</p>
            
            <h3 style="color: #667eea;">📧 Restez informé(e)</h3>
            <p>Nous vous tiendrons au courant des dernières nouveautés et vous avertirons dès que la beta sera disponible.</p>
            
            <h3 style="color: #667eea;">🎁 Avantages exclusifs</h3>
            <ul>
                <li>Accès prioritaire à toutes les fonctionnalités</li>
                <li>Support dédié de notre équipe</li>
                <li>Tarif préférentiel à vie</li>
                <li>Influence sur le développement du produit</li>
            </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
            <h3 style="color: white; margin: 0;">🤝 Une question ?</h3>
            <p style="color: white; margin: 10px 0;">Notre équipe est là pour vous aider !</p>
            <p style="color: white;">📧 contact@edukai.fr | 📱 Instagram @edukaifr</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
            <p style="color: #666; font-size: 14px;">
                Merci de rejoindre l'aventure Edukai !<br>
                L'équipe Edukai 🐧
            </p>
        </div>
    </div>
</div>
```

## Step 4: Get Your Public Key

1. In EmailJS dashboard, go to "Account" → "General"
2. Find your **Public Key**
3. Copy it (format: `user_xyz123abc`)

## Step 5: Add Environment Variables

Create a `.env.local` file in your project root with:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN=template_new_beta_signup
NEXT_PUBLIC_EMAILJS_TEMPLATE_USER=template_welcome_user
```

**Replace the values with your actual EmailJS credentials!**

## Step 6: Test the Setup

1. Run your development server: `pnpm dev`
2. Go to the beta signup section
3. Fill out the form with test data
4. Submit the form
5. Check:
   - Your email (tristan68420@gmail.com) for the admin notification
   - The test user's email for the welcome message

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ Unlimited services
- ✅ Unlimited templates
- ✅ Email tracking
- ✅ No credit card required

Perfect for beta signups! 🎉

## Troubleshooting

### Common Issues:

1. **Emails not sending**
   - Check your Service ID and Public Key
   - Verify template IDs match exactly
   - Check browser console for errors

2. **Gmail authentication issues**
   - Make sure you've connected Gmail in EmailJS dashboard
   - Check if your Gmail account allows less secure apps

3. **Template variables not working**
   - Verify variable names match exactly (case-sensitive)
   - Use double curly braces: `{{variable_name}}`

### Support
If you need help, contact EmailJS support or check their documentation at https://www.emailjs.com/docs/

---

**🎯 Once setup is complete, every beta signup will automatically:**
1. Send you (tristan68420@gmail.com) a detailed notification
2. Send the user a beautiful welcome email
3. All completely FREE! 🎉 
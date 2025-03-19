import React, { useEffect } from 'react'

const GoogleAd = ({ className, slot, format, responsive }) => {
  useEffect(() => {
    // Check if window and window.adsbygoogle exist
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {
        console.error('AdSense error:', e)
      }
    }
  }, [])

  // Determine format type
  const isResponsive = responsive
  const adStyle = {
    display: 'block',
    textAlign: 'center',
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-4453193920935160" // Replace with your publisher ID
        data-ad-slot={slot}
        data-ad-format={format || 'auto'}
        data-full-width-responsive={isResponsive}
      />
    </div>
  )
}

export default GoogleAd
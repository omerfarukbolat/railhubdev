interface DisclaimerProps {
  originalSiteName?: string;
  originalSiteUrl?: string;
}

export function Disclaimer({ 
  originalSiteName = "the original railway sites",
  originalSiteUrl 
}: DisclaimerProps) {
  return (
    <div className="text-center text-xs text-muted-foreground/70 sm:text-sm">
      <p>
        <span className="font-medium">Disclaimer:</span> This is an unofficial, non-commercial educational demo inspired by{' '}
        {originalSiteUrl ? (
          <a 
            href={originalSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 transition-colors hover:text-muted-foreground"
          >
            {originalSiteName}
          </a>
        ) : (
          <span className="italic">{originalSiteName}</span>
        )}
        . All original design rights belong to their respective owners. This site is intended for learning purposes only.
      </p>
    </div>
  );
}

